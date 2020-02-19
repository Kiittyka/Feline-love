import React from 'react'
import Layout from '../components/layout'
import '../styles/index.scss'
import '../styles/facts.scss'

export default class CatFacts extends React.Component {
    state = {
        loading: true,
        fetchedData: []
    };

    componentDidMount() {
        const url = "https://catfact.ninja/fact";
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
                        <blockquote className="ludwig" key={fetchedData.fact}>
                            {fetchedData.fact}
                        </blockquote>
                        { /*<p key={fetchedData.fact}>{fetchedData.fact}</p> */}</div>
                    }
                </Layout>
            </div>
        )
    }
}