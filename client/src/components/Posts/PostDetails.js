import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import {
  deletePostAction,
  fetchPostDetailsAction,
} from "../../redux/slices/posts/postSlices";
import { useDispatch, useSelector } from "react-redux";
import DateFormatter from "../../utils/DateFormatter";
import LoadingComponent from "../../utils/LoadingComponent";
import AddComment from "../Comments/AddComment";
import CommentsList from "../Comments/CommentsList";


const PostDetails = ({
  match: {
    params: { id },
  },
}) => {
  const dispatch = useDispatch();

  //select post details from store
  const post = useSelector(state => state?.post);
  const { postDetails, loading, appErr, serverErr, isDeleted } = post;

  //comment
  const comment = useSelector(state => state.comment);
  const { commentCreated, commentDeleted } = comment;
  useEffect(() => {
    dispatch(fetchPostDetailsAction(id));
  }, [id, dispatch, commentCreated, commentDeleted]);

  //Get login user data from store
  const user = useSelector(state => state.users);
  const {
    userAuth
   } = user;

  const isCreatedBy = postDetails?.user?._id === userAuth?._id;
  console.log(isCreatedBy);

  //redirect
  if (isDeleted) return <Redirect to="/posts" />;
  return (
    <>
      {loading ? (
        <div className="h-screen">
          <LoadingComponent />
        </div>
      ) : appErr || serverErr ? (
        <h1 className="h-screen text-red-400 text-xl">
          {serverErr} {appErr}
        </h1>
      ) : (
        <section className="py-8 2xl:py-8 bg-gray-800 overflow-hidden">
          <div className="container px-4 mx-auto">
            {/* Post Image */}
            <img
              className="mb-24 w-full h-96 object-cover custom_post_img"
              src={postDetails?.image}
              alt=""
            />
            <div className="text-center custom_post_detail_box">
              <h2 className="
                mt-4 mb-5 text-2xl
                2xl:text-4xl text-white
                font-bold font-heading
                custom_post_title
              ">
                {postDetails?.title}
              </h2>

              {/* User */}
              <div className="border-t mb-10 border-gray-500">
                <p className="text-center text-gray-500">
                  {<DateFormatter date={post?.createdAt} />}
                </p>
              </div>

              {/* Post description */}
              <div className="custom_post_description">
                <p className="mb-2 text-left">
                  {postDetails?.description}

                  {/* Show delete and update if it was created by the user */}
                  {isCreatedBy ? (
                    <p class="flex">
                      <Link to={`/update-post/${postDetails?._id}`} class="p-3">
                        <PencilAltIcon class="h-8 mt-3 text-yellow-300" />
                      </Link>
                      <button
                        onClick={() =>
                          dispatch(deletePostAction(postDetails?._id))
                        }
                        class="ml-3"
                      >
                        <TrashIcon class="h-8 mt-3 text-red-600" />
                      </button>
                    </p>
                  ) : null}
                </p>
              </div>

              <div className="
                border-t
                border-gray-500
                custom_post_user_box"
                >
                <img
                  className="mr-8 mt-4 w-20 lg:w-24 h-20 lg:h-24 rounded-full"
                  src={postDetails?.user?.profilePhoto}
                  alt=""
                />

                <div className="text-left">
                  <Link to={`/profile/${postDetails?.user?._id}`}>
                    <h4 className="mb-1 text-2xl font-bold text-gray-50">
                      <span className="text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 to-orange-600">
                        {postDetails?.user?.firstName}{" "}
                        {postDetails?.user?.lastName}{" "}
                      </span>
                    </h4>
                  </Link>
                </div>

                <div className="custom_bio_text_box">
                  <p>{postDetails?.user.bio}</p>
                </div>
              </div>

            </div>
          </div>

          {/* Add comment Form component here */}
          {userAuth ? <AddComment postId={id} /> : null}
          <div className="flex justify-center  items-center">
            {/* <CommentsList comments={post?.comments} postId={post?._id} /> */}
            <CommentsList comments={postDetails?.comments} />
          </div>
        </section>
      )}
    </>
  );
};

export default PostDetails;
