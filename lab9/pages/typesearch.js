import Link from 'next/link'
import Head from 'next/head'
import styles from "./index.module.css";
class TypeSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  getType = () => {

    let type = document.querySelector('#TypeSearch').value;
    console.log(type)

    fetch("api/pokemon/type/" + type)
    .then((res) => { return res.json() })
    .then((processed) => {
      let reporting = document.querySelector("#results");
      console.log(processed)
      if(processed.error) {
        
          reporting.innerHTML = processed.error;
      } else {
          reporting.innerHTML = "Pokemon Name: " + processed.name + "; Pokemon Id #: " + processed.id + "; Pokemon Type(s): " + processed.typeList;
      }

  });

}

    render() {
        return(
          <div>
            <Head>
              <title>Search Pokemon By Type</title>
            </Head>
            <img className={styles.img} src="https://i.ebayimg.com/images/g/OdcAAOSwsTxXjDgB/s-l300.jpg" alt="Search Pokemon By Type" border="0"/>
            <h1 className={styles.h1}>Search Pokemon By Type</h1>
            <br/>
            <input type="text" id="TypeSearch" className={styles.cssinput}/>
            <button onClick={this.getType} className={styles.myButton}>SUBMIT</button>
            <div id="results" className={styles.blue}></div>
            <hr className={styles.hr}/>
            <br/>
            <Link href="/">
              <a>Search Pokemon By Id</a>
            </Link>
            <br/>
            <Link href="/namesearch">
              <a>Search Pokemon By Name</a>
            </Link>
          </div>
        );
    }

}

export default TypeSearch;