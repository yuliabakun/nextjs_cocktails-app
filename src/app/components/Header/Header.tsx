import './Header.scss';
import Image from "next/image";
import logo from '../../../../public/logo.svg';
import { Button } from "@mui/material";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';


export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Image
          src={logo}
          width={40}
          height={40}
          alt="Website logo"
        />
      </div>

      <div className="header__aside">
        <Button startIcon={<FavoriteBorderOutlinedIcon />}>
          My List
        </Button>

        <Button startIcon={<AddOutlinedIcon />}>
          Add New
        </Button>

        <Button variant="outlined">
          Log Out
        </Button>
      </div>
    </header>
  );
}
