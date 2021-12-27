import React, { Component } from 'react';

class ListMenuUtama extends Component{
    constructor(props){
        super(props);
        this.state={
            image:this.props.img
        }
    }
    render(){
        return(
            <div>
                <h1>
                    <center>Selamat Datang Di Warung Nusantara</center>
                </h1>
                <center>
                    <img src={this.state.image} alt="Masakan Nusantara" width="600" />
                </center>
            </div>
        );
    }
}
export default ListMenuUtama;