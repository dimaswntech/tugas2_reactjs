import React from "react";

class MenuTentangKami extends React.Component{
    constructor(){
        super();
        this.state={
            tentang:"Warung Nusantara Adalah Restoran Yang Bernuansa Bening"
        }
    }
    render(){
        return(
            <div>
                <center>
                <p>Tentang Kami</p> {this.state.tentang}
                </center>                
            </div>
        );
    }
}
export default MenuTentangKami;