import './Header.scss';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../static/icons/logo.svg';

// mui imports
import { Button } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link href="/">
          <Image
            src={logo}
            width={40}
            height={40}
            alt="bartender shaker"
            priority={false}
          />
        </Link>
      </div>

      <div className="header__aside">
        <Link href="/favourites">
          <Button startIcon={<FavoriteBorderOutlinedIcon />}>
            My List
          </Button>
        </Link>

        <Link href="/create">
          <Button startIcon={<AddOutlinedIcon />}>
            Add New
          </Button>
        </Link>

        <Link href="/signup">
          <Button variant="outlined">
            Sign Up
          </Button>
        </Link>
      </div>
    </header>
  );
}
