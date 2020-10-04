import React from 'react'
import Wrapper from '../../modules/wrapper'
import { ThemeProvider } from 'styled-components'
import { light, dark } from '../../components/Themes/Themes'
import { BrowserRouter as Router } from 'react-router-dom'
import { themeStateSelector } from '../../store/users/selectors'
import { useSelector } from 'react-redux'


const Layout = (props) => {
  const theme = useSelector(themeStateSelector)
  return (
    <ThemeProvider theme={theme.theme && light || dark}>
      <Router>
        <Wrapper >
          {props.children}
        </Wrapper>
      </Router>
    </ThemeProvider>
  )
}

export default Layout;
