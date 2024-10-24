import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Tips from '../Components/Tips'
import Sport from '../Components/Sport'
import Picks from '../Components/Picks'
import Prediction from '../Components/Prediction'
import Footer from '../Components/Footer'
import { auth, db } from '../config/firebase'
import { doc, getDoc } from 'firebase/firestore'

import { getDocs, collection } from 'firebase/firestore';

const Home = () => {
  const [userData, setUserData] = React.useState()
  const [isAuth, setIsAuth] = React.useState(false)
  const [loading, setloading] = React.useState(false)
  const [games, setGames] = React.useState([])
  const [banners, setbanners] = React.useState([])
  const [code, setCode] = React.useState("")

  const fetchUser = async () => {
    auth.onAuthStateChanged(async (user) => {
      // console.log("====", user)

      if (user) {
        setloading(true)
        const docRef = doc(db, "users", user.uid)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          setUserData(docSnap.data())
          setIsAuth(true)
          setloading(false)
        } else {
          setloading(false)
          // console.log("User not logged in")
          setIsAuth(false)
        }
      } else {
        setloading(false)
        setIsAuth(false)
      }
    })
  }

  const fetchPredictions = async () => {
    setloading(true)
    const docRef = doc(db, "premium", "TWElIvPfSuKlnRSQoQF6")
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      // console.log(docSnap.data())
      setGames(docSnap.data().games)
      setCode(docSnap.data().code)
      setloading(false)
    } else {

      setGames([])
      setloading(false)
    }
  }

  function getAllDocuments() {
    const query = collection(db, 'banners');
    getDocs(query).then((querySnapshot) => {
      const documents = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      // console.log(documents);
      setbanners(documents)
    }).catch((error) => {
      console.error(error);
      setbanners([])
    });

  }



  React.useEffect(() => {
    fetchUser()
    fetchPredictions()
    getAllDocuments()
  }, [])
  return (
    <div>
      {console.log(games)}
      <Header isAuth={isAuth} setIsAuth={setIsAuth} />
      <Hero banners={banners} />
      <Tips loading={loading} games={games} code={code} />
      {/* <Sport/> */}
      {/* <Picks/> */}
      {/* <Prediction /> */}
      <Footer />
    </div>
  )
}

export default Home