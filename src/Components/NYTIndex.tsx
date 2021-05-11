import React, { BaseSyntheticEvent, Component } from 'react'
import { Input } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {IResponse, IArticle,  IResults,  IState,  IValue } from './Interfaces'
import Display from './NYTDisplay'

class NYTDisplay extends Component<{}, IState>{
    constructor() {
        super('')
        this.state = {
            query: '',
            startDate: '',
            endDate: '',
            response: {
                response: {
                    docs: []
                }
            }
        }
    }



    fetchResults = (event: BaseSyntheticEvent) => {
        event.preventDefault()
        let baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?'
        let key = 'igepbZnrXUWhJ3m7FlkFk4e0XRKngdAA'
        let url;
       
        if (this.state.startDate !== '') {
           url = `${baseURL}&begin_date=${this.state.startDate}` 
        }

        if (this.state.endDate !== '') {
            url = `${url}&end_date=${this.state.endDate}`
        }
        
        let finalURL = `${url}q=${this.state.query}&api-key=${key}`
        console.log(finalURL)
        fetch(finalURL, {
            method: 'GET'
        }).then(response => response.json())
            .then((response) => this.displayResults(response))
            .catch((e) => console.log(e))
    }

    displayResults(response: IResults) {
        console.log(response)
        return this.state.query !== '' ? this.setState({ response: response }) : console.log('query empty')

    }

    handleChange(e: BaseSyntheticEvent){
        this.setState((prevstate) => ({
            ...prevstate, [e.target.name]: e.target.value as Pick<
            IState, //I pass in a type
            keyof IState //I want all the keys from this type (these are types)
          >
        }))
      
    }

    render() {

        return (
            <div>
                <form onSubmit={(e) => this.fetchResults(e)}>
                    <TextField
                        style={{ display: 'flex', justifyContent: 'center', width: '70%', marginLeft: '15vw' }}
                        id="date"
                        label="Start Date"
                        name="startDate"
                        type="date"
                        onChange={(e) => this.handleChange(e)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <br />
                    <TextField
                        style={{ display: 'flex', justifyContent: 'center', width: '70%', marginLeft: '15vw' }}
                        id="date"
                        label="End Date"
                        name="endDate"
                        type="date"
                        onChange={(e) => this.handleChange(e)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <br />
                    <Input defaultValue="Search term" name="query" onChange={(e) => this.handleChange(e)} />
                    <br />
                    <br />
                    <Button variant="contained" type="submit">Submit</Button>
                </form>
                <div>
                
                    {
                       this.state.response?.response?.docs?.map((article: IArticle, index) => {
                         console.log(article)
                            return (
                               <div>
                                   <Display article={article} index={index}/>
                                </div>
                            )
                        })}
                </div>


            </div>
        )
    }
}

export default NYTDisplay;