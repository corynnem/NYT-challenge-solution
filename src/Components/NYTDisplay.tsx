import React from 'react'
import NYTDisplay from './NYTIndex'
import { IArticle } from './Interfaces'

interface IImage {
    url: string
}

interface IProps {
    article: IArticle,
    index: number
}

const Display = (props: IProps) => {
    const {
        article,
        index
    } = props

    // console.log(props)

    return (
  
        <div>
            <div style={{ backgroundColor: 'grey' }} key={index}>
                <h3><a href={article.web_url}>{article.headline.main}</a></h3>

                <div><span style={{ color: 'white', display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                    {article.multimedia.map((image: IImage, index: number) => {
                        return index === 1 ? <img style={{ width: '60%' }} src={`http://nytimes.com/${image.url}`} /> : ''
                    })}
                    <div>
                        <p>Keywords:</p>
                        {article.keywords.length > 0 ? article.keywords.map((keyword) => {
                            return <div><p style={{ backgroundColor: '#8d64a7', padding: '1%', height: '5vh' }}>{keyword.value}</p></div>
                        }
                        ) : <p></p>}
                    </div>
                </span><hr /></div>

                <p>{article.abstract}</p>

            </div>
            </div>
    )
}


export default Display