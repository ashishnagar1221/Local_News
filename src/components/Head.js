import React, { useState ,useEffect} from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import Navtab from './Navtab'

const Head = (props) => {  
  const [searchKey,setSearchKey] = useState('')
  const [dropLang,setLang] = useState('')
  
  const functLang = (lan) => {
    setLang(lan)
  }

  return(
    <div style={{padding: '20px 0'}}>
        <div>
          <h3>
              News Local
          </h3>
        </div>
        <div>
        <DropdownButton id="dropdown-item-button" title="Languages">
          <Dropdown.Item as="button" onSelect ={() => functLang('bn')} >Bengali</Dropdown.Item>
          <Dropdown.Item as="button" onSelect ={() => functLang('gu')} >Gujarati</Dropdown.Item>
          <Dropdown.Item as="button" onSelect ={() => functLang('hi')} >Hindi</Dropdown.Item>
          <Dropdown.Item as="button" onSelect ={() => functLang('kn')} >Kannada</Dropdown.Item>
          <Dropdown.Item as="button" onSelect ={() => functLang('ml')} >Malayam</Dropdown.Item>
          <Dropdown.Item as="button" onSelect ={() => functLang('mr')} >Marathi</Dropdown.Item>
          <Dropdown.Item as="button" onSelect ={() => functLang('ne')} >Nepali</Dropdown.Item>
          <Dropdown.Item as="button" onSelect ={() => functLang('pa')} >Punjabi</Dropdown.Item>
          <Dropdown.Item as="button" onSelect ={() => functLang('ta')} >Tamil</Dropdown.Item>
          <Dropdown.Item as="button" onSelect ={() => functLang('te')} >Telugu</Dropdown.Item>
          <Dropdown.Item as="button" onSelect ={() => functLang('ur')} >Urdu</Dropdown.Item>
        </DropdownButton>
        </div>
        <div>
          <Navtab lang={dropLang}/>
        </div>
    </div>
   )

 }

export default Head