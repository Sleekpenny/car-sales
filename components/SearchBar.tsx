"use client";

import Image from "next/image";
import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import SearchButton from "./SearchButton";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(manufacturer === '' && model === '') {
      return alert('Please fill in the search bar')
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
  };

  const updateSearchParams = (model:string, manufacturer:string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if(model) {
      searchParams.set('model', model)
    } else {
      searchParams.delete('model');
    }

    if(manufacturer) {
      searchParams.set('manufacturer', manufacturer)
    } else {
      searchParams.delete('manufacturer');
    }

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`
    router.push(newPathName);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherclasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-5 h-5 ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherclasses="sm:hidden" />
      </div>
      <SearchButton otherclasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
