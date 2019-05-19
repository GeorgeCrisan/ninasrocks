import Link from 'next/link';

const linkStyle = {
  marginRight: 15
}

export default  () => {
  return (
    <div className='navigation'>

      <div className='nav'>
        <Link href='/index'>
         <a style={linkStyle}>  Home  </a>
          </Link>
        <Link href='/login'>
         <a style={linkStyle}>  Login  </a> 
         </Link>
        <Link href='/about'>
         <a style={linkStyle}>  About  </a> 
         </Link>
      </div>
    </div>
  );
} 