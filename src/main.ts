import './styles/style.css'
import './styles/containers.css'

import { handleNavigation } from './utilities/routing.ts';
import { errorContainer } from './error/error404.ts';
const mainDiv: HTMLElement | null = document.getElementById('app');

if (mainDiv){
  mainDiv.innerHTML =`<nav>
  <a href="/">Login</a>
  <a href="/Register">Register</a>
  <a href="/UserDetails">User Details</a>
</nav>
<div id="content">
  </div>
`
// Event listener for popstate event
window.addEventListener('popstate', handleNavigation);

// This will add event listener for internal links
const links = document.querySelectorAll('a[href]');
links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    window.history.pushState('', '', href);
    handleNavigation();
  });
});

handleNavigation();
} else {
document.body.appendChild(errorContainer)
}
