function Div(props) {
    const pokename = props.pokename

    return (
    <div style={{width:'50px', height:'50px', border:'1px solid #000'}}>{pokename}</div>
    );
}

export default Div;