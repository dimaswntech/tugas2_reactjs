import React from "react";
import ListMakanan from "../ListData/ListMakanan";

class MenuMakanan extends React.Component{
    render(){
        return(
            <div>
                <h3>Daftar Makanan Yang Tersedia :</h3>
                <td>
                    <ListMakanan linkimg="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"/>
                </td>
                <td>
                    <ListMakanan linkimg="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"/>
                </td>
                <td>
                    <ListMakanan linkimg="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"/>
                </td>
                <td>
                    <ListMakanan linkimg="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png"/>
                </td>
                <td>
                    <ListMakanan linkimg="https://awsimages.detik.net.id/community/media/visual/2021/08/19/resep-nasi-kuning-banjar-dan-haruan-habang-1_43.jpeg?w=650&q=80"/>
                </td>
            </div>
        );
    }
}
export default MenuMakanan;