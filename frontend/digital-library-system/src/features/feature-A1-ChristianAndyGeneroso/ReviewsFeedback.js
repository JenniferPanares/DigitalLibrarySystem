import './ReviewsFeedback.css';
import React, { useState } from 'react';
import Rating from 'react-rating';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import { IoStar, IoStarOutline } from 'react-icons/io5';
import { VscBlank } from "react-icons/vsc";

const ReviewFeedback = () => {
  const [ratingData, setRatingData] = useState([
    { id: 1, user: 'Anton Chigurh', rating: 3.5, date: '2024-04-25',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare enim diam, eget iaculis felis molestie ac.',
      likes: 2442, liked: false
    },
    { id: 2, user: 'Rust Cohle', rating: 2.5, date: '2024-05-02',
      review: 'Aenean maximus nulla ut lectus iaculis tempor. Nunc viverra ipsum in nisi pellentesque lacinia id nec libero.',
      likes: 959, liked: false
    },
    { id: 3, user: 'Tom Bombadil', rating: 4, date: '2024-05-07',
      review: 'Sed ac ullamcorper lectus. Fusce ut facilisis eros, quis blandit justo. Nulla semper nunc metus, ac ullamcorper tortor semper suscipit.',
      likes: 4243, liked: false
    },
    {
      id: 4, user: 'Miquella', rating: 2, date: '2024-05-09',
      review: 'Nam placerat tempus nisi, non iaculis lectus interdum nec. Curabitur aliquet mattis lacus, non blandit massa facilisis non. Suspendisse in placerat risus.',
      likes: 1865, liked: false
    },
    {
      id: 5, user: 'Malenia', rating: 3, date: '2024-05-10',
      review: 'Integer arcu ex, tempor a nibh et, mattis mattis leo. Proin turpis lacus, eleifend non tincidunt eu, viverra vitae magna. Donec vitae ornare dui.',
      likes: 2110, liked: false
    },
    { id: 6, user: 'Radahn', rating: 3, date: '2024-05-15', review: '', likes: 0, liked: false },
    { id: 7, user: 'Mohg', rating: 3.5, date: '2024-05-16', review: '', likes: 0, liked: false },
    { id: 8, user: 'Alexander', rating: 5, date: '2024-05-20', review: '', likes: 0, liked: false },
    { id: 9, user: 'Thiollier', rating: 1, date: '2024-05-27', review: '', likes: 0, liked: false },
    { id: 10, user: 'Ansbach', rating: 4.5, date: '2024-05-29', review: '', likes: 0, liked: false },
    { id: 11, user: 'Leda', rating: 0.5, date: '2024-05-31', review: '', likes: 0, liked: false },
    { id: 12, user: 'Hornsent', rating: 0.5, date: '2024-06-01', review: '', likes: 0, liked: false }
  ]);
    //ratings and reviews will be separate tables with the actual database
  const [displayData, setDisplayData] = useState([...ratingData].sort((a, b) => new Date(b.date) - new Date(a.date)));
  const [selectedOption, setSelectedOption] = useState("newest");
  const [modal, setModal] = useState(false);

  const [maxRatingId, setMaxRatingId] = useState(Math.max(...ratingData.map(review => review.id)));
  const [newRatingId, setNewRatingId] = useState(maxRatingId + 1);
  const [hasRated, setHasRated] = useState(false);
  const [userRating, setUserRating] = useState(1);
  const [userReview, setUserReview] = useState("");
  const [userListData, setUserListData] = useState([]);
  const loggedUser = "Tarnished";

  const addRating = () => {
    const ratingNum = parseFloat(userRating);
    const newListData = {
      id: newRatingId, user: loggedUser, rating: ratingNum, date: currentDate, review: userReview, likes: 0, liked: false
    }

    setRatingData([...ratingData, newListData]);
    setUserListData([...userListData, newListData]);
    setHasRated(true);
    setModal(!modal);

    console.log(userListData);
    return
  }

  const editRating = (id) => {
    const newList = ratingData.map((item) => {
      if (item.id === id) {
        const updatedRating = {
          ...item, rating: parseFloat(userRating), review: userReview
        };
        return updatedRating;
      }
      return item;
    })

    setRatingData(newList);
    setModal(!modal);
  }

  const deleteRating = (id) => {
    setRatingData(ratingData.filter(rating => rating.id !== id));
    
    setUserRating(1);
    setUserReview("");
    setModal(!modal);
    setHasRated(false);

    return;
  }

  const getCurrentDate = () => {
    const today = new Date();
    const month = today.getMonth()+1;
    const day = today.getDate();
    const year = today.getFullYear();
    return `${year}-${month}-${day}`
  }

  const [currentDate, setCurrentDate] = useState(getCurrentDate());

  const handleSortBy = (e) => {
    setSelectedOption(e.target.value);
    let sortedRatings;

    switch(e.target.value) {
      case "oldest":
        sortedRatings = [...ratingData].sort((a, b) => new Date(a.date)- new Date(b.date));
        break;
      case "newest":
        sortedRatings = [...ratingData].sort((a, b) => new Date(b.date)- new Date(a.date));
        break;
      case "highest-rating":
        sortedRatings = [...ratingData].sort((a, b) => b.rating - a.rating);
        break;
      case "lowest-rating":
        sortedRatings = [...ratingData].sort((a, b) => a.rating - b.rating);
        break;
      case "most-liked":
        sortedRatings = [...ratingData].sort((a, b) => b.likes - a.likes);
        break;
      default:
        sortedRatings = ratingData
    }

    setDisplayData(sortedRatings);
  }

  const displayAvgRating = () => {
    const totalRating = ratingData.reduce((total, index) => total = total + index.rating, 0);
    const avgRating = totalRating / ratingData.length;
    return avgRating.toFixed(2);
  }

  const handleLike = (id) => {
    const newLikeNum = displayData.map((review) => {
      if (review.id === id) {
        return {...review, 
          liked: !review.liked,
          likes: review.liked ? review.likes - 1 : review.likes + 1};
      }
      return review;
    });
    setRatingData(newLikeNum);
    setDisplayData(newLikeNum);
  };

  const toggleAddRating = () => {
    setModal(!modal)
  }

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <div className="App">
      <div className="flex-item details">
        <img src="images/placeholder-book.png" alt="placeholder-cover" className="bookCover"/>
        <h2>Placeholder Book</h2>
        <h4>John D. Author</h4>
        <p>Average Rating: {displayAvgRating()}</p>
        <Rating 
          className="review-rating"
          initialRating={displayAvgRating()} 
          fractions={2} 
          emptySymbol={<VscBlank />}
          fullSymbol={<IoStar />}
          readonly
        />
        {!hasRated && ( <>
          <p><button className='rating-config-btn' onClick={toggleAddRating}>Add Rating</button></p>
          {modal && (
            <div className="modal">
              <div onClick={toggleAddRating} className="overlay"></div>
              <div className="modal-content">
                <button className="close-modal" onClick={toggleAddRating}>&times;</button>
                <h2>Read it? Rate it!</h2>
                <Rating 
                    initialRating={userRating} 
                    fractions={2} 
                    emptySymbol={<IoStarOutline />}
                    fullSymbol={<IoStar />}
                    value={userRating}
                    onChange={(value) => setUserRating(value) }
                />
                <p>{userRating}</p>
                <div>
                  <p>Write a review (optional)</p>
                  <label>User: 
                    <input value={loggedUser} disabled></input>
                  </label>
                  <label>Date:  
                    <input value={currentDate} disabled></input>
                  </label>
                  <textarea value={userReview} onChange={(e) => setUserReview(e.target.value)} className="review-field"></textarea>
                  <div>
                    <button className='rating-config-btn' type='button' onClick={addRating}>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>)}
        {hasRated && ( <>
          <p><button className='rating-config-btn' onClick={toggleAddRating}>Edit Rating</button></p>
          {modal && (
            <div className="modal">
              <div onClick={toggleAddRating} className="overlay"></div>
              <div className="modal-content">
                <button className="close-modal" onClick={toggleAddRating}>&times;</button>
                <h2>Edit Your Rating</h2>
                <Rating 
                    initialRating={userRating} 
                    fractions={2} 
                    emptySymbol={<IoStarOutline />}
                    fullSymbol={<IoStar />}
                    value={userRating}
                    onChange={(value) => setUserRating(value) }
                />
                <p>{userRating}</p>
                <div>
                  <p>Write a review (optional)</p>
                  <label>User: 
                    <input value={loggedUser} disabled></input>
                  </label>
                  <label>Date:  
                    <input value={currentDate} disabled></input>
                  </label>
                  <textarea value={userReview} onChange={(e) => setUserReview(e.target.value)} className="review-field"></textarea>
                  <div>
                    <button className='rating-config-btn' type='button' onClick={() => deleteRating(newRatingId)}>Delete</button>
                    <button className='rating-config-btn' type='button' onClick={() => editRating(newRatingId)}>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>)}
      </div>

      <div className="flex-item reviews">
        <div>
          <h1>User Reviews</h1>
          <span>Sort reviews by: </span>
          <select value={selectedOption} onChange={handleSortBy}>
            <option value="oldest">Oldest</option>
            <option value="newest">Newest</option>
            <option value="highest-rating">Highest Rating</option>
            <option value="lowest-rating">Lowest Rating</option>
            <option value="most-liked">Most Liked</option>
          </select>
        </div>
        <div>
          <ul>
            {displayData.map(rating => (
              rating.review && (
              <li  key={rating.id}>
                <span>
                  <h3>Review By {rating.user}</h3>
                  <Rating 
                    className="review-rating"
                    initialRating={rating.rating} 
                    fractions={2} 
                    emptySymbol={<IoStarOutline />}
                    fullSymbol={<IoStar />}
                    readonly
                  />
                  <span>Date Posted: {rating.date}</span>
                </span>
                <p>{rating.review}</p>
                <p>Likes: {rating.likes}</p>
                <button className='like-btn' type="button" onClick={() => handleLike(rating.id)}>
                  {!rating.liked && (<>
                    <AiOutlineLike />
                    <span>Like</span></>
                  )}
                  {rating.liked && (<>
                    <AiFillLike />
                    <span>Unlike</span></>)}
                </button>
              </li>
              )
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ReviewFeedback;