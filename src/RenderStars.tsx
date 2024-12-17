type Rating = {
    rate: number; // Rating value
    count: number; // Number of ratings
  };
function RenderStars(props : any) {
    const rating : Rating = props.rating;

    if (!rating || typeof rating.rate === "undefined") return null; 
    const ratings=rating.rate;
    const totalStars = 5;
    let stars = [];
  
    // Loop to create star elements based on the rating
    for (let i = 1; i <= totalStars; i++) {
      if (i <= ratings) {
        // Filled star for each rating point
        stars.push(<span key={i} className="fa fa-star text-warning"></span>);
      } else {
        // Empty star for the remaining points
        stars.push(<span key = {i} className="fa fa-star text-secondary"></span>);
      }
    }
    return ( <div>{ratings}{stars}({rating.count} ratings)</div> );
}

export default RenderStars;

