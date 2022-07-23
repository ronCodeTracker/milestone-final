import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';

export default function Home () {
    const { id } = useParams()
    const [postData, setPostData] = useState([])

    const API_CALL = ''
    
    useEffect(() => {       
        const API_URL = ``
        const fetchData = async () => {
            const response = await fetch(API_URL+`${id}`)
            const resData = await response.json()
            console.log(resData)
            setPostData(...resData)
        }
        fetchData()
    }, [ id ])

    return(
        <div className="home">
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={postData.formGroupPicture} />
      <Card.Body>
        <Card.Title src= {postData.formGroupTitle}/>
        <Card.Text src={postData.formGroupDescription}/>
        <Card.Text src={postData.formGroupPlace}/>
      </Card.Body>
    </Card>
                </div>
    )
}