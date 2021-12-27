import React from "react";

class ListMakanan extends React.Component{
    constructor(props){
        super(props);
        this.state={
            datalist:this.props.linkimg
        }
    }
    render(){
        return(
            <div>
                <img src={this.state.datalist} alt="Produk Makanan" width="150" />
            </div>
        );
    }
}
export default ListMakanan;