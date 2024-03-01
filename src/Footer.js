const Footer = () => {
    return(
        <div className="footer" style={{
            backgroundColor : '#d9d7f1', 
            position: 'fixed',
            bottom:'0px',
            left : '0px',
            right: '0px',
            display : 'flex',
            borderTop : '1px solid #f2f2f2'
        }}>
            <p style={{
                width : 'fit-content', 
                borderRadius : '2px',
                marginLeft : '1%'
            }}>1.0.0.0</p>
            <p style={{
                marginLeft : '40%'
            }}>Copyright @2024</p>
        </div>
    );
}

export default Footer;