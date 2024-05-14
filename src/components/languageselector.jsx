/* eslint-disable react/prop-types */
import {Box, 
        Button,
        Menu,
        MenuButton, 
        MenuItem, 
        MenuList, 
        Text}
        from "@chakra-ui/react"
import { Language_Versions } from "../constants"

const languages = Object.entries(Language_Versions);

const LanguageSelector = ({language, 
                          onSelect}) => {
  return(
    <Box>
      <Text mn={2} fontSize='large'>
        Language:
      </Text>
      <Menu>
      <MenuButton as={Button} >
      {language}
     </MenuButton>
    <MenuList>
      {
        languages.map(([language, version])=>(
          <MenuItem key={language} onClick=
          {()=>onSelect(language)}>{language}
          &nbsp;
          <Text as = "span" colors="gray.600" footSize="small">
            {version}
          </Text>
          </MenuItem>
        ))
      }
    </MenuList>
  </Menu>
</Box>

  )
}

export default LanguageSelector