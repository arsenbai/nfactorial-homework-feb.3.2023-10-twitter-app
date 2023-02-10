import React from "react";
import { MAGNIFYING_GLASS_SVG } from './images';



class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stringToSearch: ""
        }
    }

    onChangeUpdateStringToSearch = (e) => {
        this.setState({
            // stringToSearch: e.target.value
            stringToSearch: e.target.value
        },
        () => {
            this.props.handleData(this.state.stringToSearch);
            
            // SHOW stringToSearch
            console.log(this.state.stringToSearch)
          });
    };



    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.stringToSearch !== this.state.stringToSearch) {
    //         onChangeUpdateStringToSearch = (e) => {
    //             this.setState({
    //                 stringToSearch: e.target.value
    //             });
    //             this.props.handleData(this.state.stringToSearch);
                
    //             // SHOW stringToSearch
    //             console.log(this.state.stringToSearch)
    //         };
    //     }
        
    // }





    render() {
        
        return (
            <label className="d-flex w-25 mt-3" style={{outlineColor: '#1d9cf0', borderRadius: 50, border: 'none', height: 23}}>
                {MAGNIFYING_GLASS_SVG}
                <div className='d-flex align-items-center' style={{height: '18px'}}>
                    <input onChange={this.onChangeUpdateStringToSearch} value={this.state.stringToSearch} placeholder="Search Twitter" style={{border: 'none', height: '18px', borderRadius: 50, outlineColor:'#1d9cf0'}}></input>
                </div>
            </label>
        )
    }

}

export default Search;