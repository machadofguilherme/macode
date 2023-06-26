const renderNavigation = () => {
  const isFilter = localStorage.getItem('filter');
    if (isFilter) {
      localStorage.removeItem('filter');
    }
}

export default renderNavigation;