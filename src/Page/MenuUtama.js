import React from "react";
import ListMenuUtama from "../ListData/ListMenuUtama";

class MenuUtama extends React.Component{
    render(){
        return(
            <div>
                <ListMenuUtama img="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" />
            </div>
        );
    }
}
export default MenuUtama;