import {Route, Routes} from "react-router";
import Articles from "./pages/articles/Articles.tsx";
import LoginPage from "./pages/auth/LoginPage.tsx";
import {CssBaseline, ThemeProvider} from "@mui/material";
import appTheme from "./theme/appTheme.ts";
import {UserContextProvider} from "./components/context-providers/UserContextProvider.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import EditArticle from "./pages/articles/EditArticle.tsx";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <ThemeProvider theme={appTheme}>
          <CssBaseline/>
          <Routes>
            <Route path="/login" element={<LoginPage/>} />
            <Route path='/articles' element={<Articles/>} />
            <Route path='/articles/edit/:slug' element={<EditArticle/>} />
          </Routes>
        </ThemeProvider>
      </UserContextProvider>
    </QueryClientProvider>
  )
}

export default App
