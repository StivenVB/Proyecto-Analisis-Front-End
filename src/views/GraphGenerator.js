import React, { useState } from "react";
import {UseState} from 'react'
import {saveAs} from 'file-saver'

import data from "../data/graph";
import { ForceGraph } from "../components/graph/graph"

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function GraphGenerator() {
    const [myValue, setMyValue] = useState('');
	var data1 = {};
	const createFile = () => {
		const blob = new Blob([ myValue], { type: 'text/plain;chartset=utf-8'});
		saveAs(blob, 'graph.json');
	}
	
	const readFile = ( e ) => {
		const file = e.target.files[0];
		
		if(!file) return;
		const fileReader = new FileReader();
		
		fileReader.readAsText( file ); 
		
		fileReader.onload = () => {
			console.log(fileReader.result);
			setMyValue(fileReader.result);
		}
		
		fileReader.onerror = () => {
			console.log(fileReader.error);
		}
		
	}
	const nodeHoverTooltip = React.useCallback((node) => {
    return `<div>${node.name}</div>`;
  }, []);
  
  
  
  

  return (
    <div className="App">
    <header className="App-header">
		<h4>Graph Generator</h4>
    </header>
	
	<Row className="justify-content-center">
	 <textarea
		cols = "30"
		rows = "10"
		placeholder = "Type the JSON file to save"
		value = { myValue }
		onChange = { (e) => setMyValue( e.target.value) }
	></textarea>
	<br />
	<Col lg="3" md="3">
	<Button className="btn-fill btn-wd" variant="info"  onClick={createFile} >
	   Save File
	</Button>
	</Col>
	<Col lg="3" md="3">
	<input 
	 type = "file"
	 multiple = {false}
	 onChange = {readFile}
	/>
	</Col>
	</Row>
	<Row className="justify-content-center">
	<Col lg="3" md="3">
	<Button className="btn-fill btn-wd" variant="warning">
	   Random Graph
	</Button>
	</Col>
	</Row>
	<br />
	
		<section className="Main">
			<ForceGraph linksData={data.links} nodesData={data.nodes} nodeHoverTooltip={nodeHoverTooltip} />
		</section>
	<br />
	<Row className="justify-content-center">
	<Col lg="3" md="3">
	 <Button className="btn-fill btn-wd" variant="info">
	   Save Graph
	</Button>
	</Col>
	<Col lg="3" md="3">
	<Button className="btn-fill btn-wd" variant="danger" >
	   Delete Graph
	</Button>
	</Col>
	<Col lg="3" md="3">
	<Button className="btn-fill btn-wd" variant="success">
	   Update Graph
	</Button>
	</Col>
	</Row>
	<br />
  </div>
  );
}

export default GraphGenerator;

