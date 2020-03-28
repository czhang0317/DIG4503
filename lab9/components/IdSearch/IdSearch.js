import Link from 'next/link'
class IdSearch extends React.Component {
  constructor(props) {
    super(props);
  }
    getId = () => {

        let id = document.querySelector('#IdSearch').value;
        console.log(id)

        fetch("/api/pokemon/id/" + id)
        .then((res) => { return res.json() })
        .then((processed) => {
            this.props.callback(processed)
            console.log(processed)
        });

    }

    render() {
        return(
          <div>
          <input type="text" id="IdSearch" />
          <button onClick={this.getId}>SUBMIT</button>
          <div id="results"></div>
        </div>
        );
    }

}

export default IdSearch;