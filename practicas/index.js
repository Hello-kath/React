function Encabezado(){
    return <h1 className='color'>Soy el encabezado</h1>;
}

function Cuerpo(){
    return ( 
    <>
    
    <h2> Soy el cuerpo del HTML</h2>
    <h2> Soy el cuerpo del HTML</h2>
    
    
    </>
    )  

}



const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
        <>
        <Encabezado/>
        <Cuerpo />
    </>
);
