import Link from "next/link";
import React from "react";

const Oerderlist = () => {
  return (
    <>
      <h1>project list</h1>
      <ul>
        <li>
            <Link href="/order/shop">shop</Link>
        </li>
        <li>
            <Link href="/order/water">water</Link>
        </li>
        <li>
            <Link href="/order/oil">oil</Link>
        </li>
        <li>
            <Link href="/order/oil">oil</Link>
        </li>
      </ul>
    </>
  );
};

export default Oerderlist;
