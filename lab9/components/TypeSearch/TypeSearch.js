import Link from 'next/link'
class TypeSearch extends React.Component {
  constructor(props) {
    super(props);
  }

    getType = () => {

        let type = document.querySelector('#TypeSearch').value;
        console.log(type)

        fetch("http://localhost:3000/api/pokemon/type/" + type)
        .then((res) => { return res.json() })
        .then((processed) => {
            this.props.callback(processed)
            console.log(processed)
        });

    }

    render() {
        return(
          <div>
          <input type="text" id="TypeSearch" />
          <button onClick={this.getType}>SUBMIT</button>
          <div id="results"></div>
        </div>
        );
    }

}

export default TypeSearch;