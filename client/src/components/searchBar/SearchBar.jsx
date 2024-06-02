import {  useState } from "react"
import styles from "./SearchBar.module.css"
import axios from "axios"

export default function Searchbar() {

    const [movieAll, setMovie] = useState([])
    const  handleChange = async (movie) => {
        const response = await axios.get(`http://localhost:3000/movie?name=${movie}`)
        
        response.data.forEach(
            (e) => setMovie([...movieAll, 
                {
                    name:   
                }]) 
        )

        setMovie([...movieAll, response.data.titleResults.results.forEach(e => {
            movieAll.push({
                name: e.titleNameText,
                year: e.titleReleaseText,
                img: e.titlePosterImageModel.url
            })})])
            
        return (console.log(response.data))
    }

    return <>
    <div className={styles.group}>
        <svg className={styles.icon} aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
        <input placeholder="Search" type="search" className={styles.input} onChange={(e) => handleChange(e.target.value)} />
    </div>
    
    { movieAll.map(e =>
    <div>
        <h2>{e.name}</h2>
        <h5>{e.year}</h5>
        <img src={e.img} alt="imagen pelicula" />
    </div> }
    


</> 
 