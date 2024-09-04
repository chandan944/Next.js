import Link from "next/link";
import React from "react";

const Oerderlist = () => {
  return (
    <>
      <h1>project list</h1>
      <ul>
        <li>
            <Link href="/products/mac">mac</Link>
        </li>
        <li>
            <Link href="/products/maw">maw</Link>
        </li>
        <li>
            <Link href="/products/dog">dog</Link>
        </li>
        <li>
            <Link href="/products/cat">cat</Link>
        </li>
      </ul>
    </>
  );
};

export default Oerderlist;
