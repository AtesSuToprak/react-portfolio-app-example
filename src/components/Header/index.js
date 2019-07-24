import React from 'react';
import styles from './styles.module.css'
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const links = [
  { title: 'Case studies', href: '#' },
  { title: 'About', href: '#' },
  { title: 'Experiments', href: '#' },
]

function Header() {
  const linkComponents = links
    .map(function(currentValue) {
      return (
        <Link
          href={currentValue.href}
          color="inherit"
        >
          {currentValue.title}
        </Link>
      )
    })

  const renderedLinks = linkComponents
    .reduce((prev, curr) => {
      console.log([prev.props, ' / ', curr.props]);
      return [prev, ' / ', curr];
    })

  return (
    <Container className={styles.container}>
      <span>Mujtaba Al-Tameemi</span>
      <div>
        {
          renderedLinks
        }
        {
          /*
           *
        <Link href="#" color="inherit">Case studies</Link>
        {" / "}
        <Link href="#" color="inherit">About</Link>
        {" / "}
        <Link href="#" color="inherit">Experiments</Link>
        {" / "}
        <Link href="#" color="inherit">Research</Link>
        {" / "}
        <Link href="#" color="inherit">Re:Coded</Link>
        */
        }
      </div>
    </Container>
  )
}

export default Header;
