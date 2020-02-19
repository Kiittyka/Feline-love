import React from 'react'
import Layout from '../components/layout'
import '../styles/index.scss'
import '../styles/pics.scss'

export default class CatPics extends React.Component {
    state = {
        loading: true,
        fetchedData: []
    };

    componentDidMount() {
        const url = "https://api.thecatapi.com/v1/images/search";
        fetch(url).then(response => {
            return response.json()
        })
            .then(json => {
                this.setState({
                    fetchedData: json,
                    loading: false
                })
            })
    }
    render() {
        const { loading, fetchedData } = this.state
        return (      
            <div>
                <Layout>
                {loading ? <div className="loadingStyle">loading...</div> : <div>
                    {fetchedData.map(data =>
                        <img className="catImage centerDiv" src={data.url} key= {data.id} alt={data.id}/>)}</div>
                }
                </Layout>
                  
            </div>
        )
    }
}