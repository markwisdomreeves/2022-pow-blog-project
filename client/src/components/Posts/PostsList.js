import { useEffect } from "react";
// import { htmlToText } from 'html-to-text';
import { ThumbUpIcon, ThumbDownIcon, EyeIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchPostsAction,
  toggleAddLikesToPost,
  toggleAddDisLikesToPost,
} from "../../redux/slices/posts/postSlices";
import DateFormatter from "../../utils/DateFormatter";
import { fetchCategoriesAction } from "../../redux/slices/category/categorySlice";
import LoadingComponent from "../../utils/LoadingComponent";
import FooterSection from "../Footer/Footer";


export default function PostsList() {
  //select post from store
  const post = useSelector(state => state?.post);
  const { postLists, appErr, serverErr, likes, dislikes } = post;
  // console.log(postLists);

  //Get login user
  const user = useSelector(state => state.users);
  const { userAuth } = user;

  //select categories from store
  const category = useSelector(state => state?.category);
  const {
    categoryList,
    loading: catLoading,
    appErr: catAppErr,
    serverErr: catServerErr,
  } = category;
  //dispatch
  const dispatch = useDispatch();
  //fetch post
  useEffect(() => {
    dispatch(fetchPostsAction(""));
  }, [dispatch, likes, dislikes]);
  //fetch categories
  useEffect(() => {
    dispatch(fetchCategoriesAction());
  }, [dispatch]);

  return (
    <>
      <section>
        <div className="py-20 bg-gray-900 min-h-screen radius-for-skewed">
          <div className="container mx-auto px-4">

            <div className="custom_post_main_title">
              <h1>Welcome to the Pool of Writers' platform</h1>
              <p>"Write to Express and not Impress"</p>
            </div>

            <div className="mb-8 flex flex-wrap items-center">
              <div className="w-full lg:w-1/2 mb-5">
                <span className="text-yellow-500 font-bold">
                  Latest Posts from our contributing writers.
                </span>
                <h2 className="text-3xl mt-3 text-gray-300 lg:text-4xl font-bold font-heading">
                  Latest Post
                </h2>
              </div>
              <div className=" block text-right w-1/2">
                {/* View All */}
                <button
                  onClick={() => dispatch(fetchPostsAction(""))}
                  className="inline-block py-2 px-3 rounded-l-xl rounded-t-xl text-white-500 bg-yellow-500 hover:bg-yellow-700 text-gray-50 font-bold leading-loose transition duration-200"
                >
                  View All Posts
                </button>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3">
              <div className="mb-8 lg:mb-0 w-full lg:w-1/4 px-3">
                <div className="py-4 px-6 bg-gray-600 shadow rounded">
                  <h4 className="mb-4 text-gray-500 font-bold uppercase">
                    Categories
                  </h4>
                  <ul>
                    {catLoading ? (
                      <LoadingComponent />
                    ) : catAppErr || catServerErr ? (
                      <h1>
                        {catServerErr} {catAppErr}
                      </h1>
                    ) : categoryList?.length <= 0 ? (
                      <h1 className="text-yellow-400 text-lg text-center">
                        No Category Found
                      </h1>
                    ) : (
                      categoryList?.map(category => (
                        <li key={category.id} onClick={() =>
                          dispatch(fetchPostsAction(category?.title))
                        }
                        className="block cursor-pointer py-2 px-3 mb-4 rounded text-yellow-500 font-bold bg-gray-500">
                          {category?.title}
                        </li>
                      ))
                    )}
                  </ul>
                </div>
              </div>
              <div class="w-full lg:w-3/4 px-3">
                {/* Post goes here */}
                {appErr || serverErr ? (
                  <h1 className="text-yellow-600 text-center text-lg ">
                    {serverErr} {appErr}
                  </h1>
                ) : postLists?.length <= 0 ? (
                  <h1 className="text-yellow-400 text-lg text-center">
                    No Post Found
                  </h1>
                ) : (
                  postLists?.map(post => (
                    <div
                      key={post.id}
                      className="flex flex-wrap bg-gray-900
                      -mx-3 lg:mb-6 custom_post_list_box mb-10"
                    >
                      {/* w-full lg:w-1/4 */}
                      <div className="mb-10 custom_post_list_box_1">
                        <Link to={`/posts/${post?._id}`}>
                          {/* Post image */}
                          <img
                            className="w-full h-full object-cover rounded"
                            src={post?.image}
                            alt=""
                          />
                        </Link>
                        {/* Likes, views dislikes */}
                        <div className="flex flex-row bg-gray-300 justify-center w-full items-center ">
                          {/* Likes */}
                          <div className="flex flex-row justify-center items-center ml-4 mr-4 pb-2 pt-1">
                            {/* Toggle like  */}
                            <div className="">
                              <ThumbUpIcon
                                onClick={() =>
                                  dispatch(toggleAddLikesToPost(post?._id))
                                }
                                className="h-7 w-7 text-yellow-600 cursor-pointer"
                              />
                            </div>
                            <div className="pl-2 text-gray-600">
                              {post?.likes?.length}
                            </div>
                          </div>
                          {/* Dislike */}
                          <div className="flex flex-row justify-center items-center ml-4 mr-4 pb-2 pt-1">
                            <div>
                              <ThumbDownIcon
                                onClick={() =>
                                  dispatch(toggleAddDisLikesToPost(post?._id))
                                }
                                className="h-7 w-7 cursor-pointer text-gray-600"
                              />
                            </div>
                            <div className="pl-2 text-gray-600">
                              {post?.disLikes?.length}
                            </div>
                          </div>
                          {/* Views */}
                          <div className="flex flex-row justify-center items-center ml-4 mr-4 pb-2 pt-1">
                            <div>
                              <EyeIcon className="h-7 w-7 text-gray-400" />
                            </div>
                            <div className="pl-2 text-gray-600">
                              {post?.numViews}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full px-3 custom_post_list_box_2">
                        <Link to={`/posts/${post?._id}`} className="hover:underline">
                          <h3 className="mb-1 text-2xl text-yellow-400 font-bold font-heading">
                            {post?.title}
                          </h3>
                        </Link>

                        <p style={{color: "rgb(173, 171, 171)"}}>
                          {post?.description.slice(0, 450)} ...
                        </p>

                        {/* User Avatar */}
                        <div className="mt-6 flex items-center">
                          <div className="flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={post?.user?.profilePhoto}
                              alt=""
                            />
                          </div>
                          <div className="ml-3">
                            {
                              !userAuth ?
                              <p className="text-sm font-medium text-gray-900">
                              <Link
                                to={`/profile/${post?.user?._id}`}
                                className="text-yellow-400 hover:underline "
                              >
                                {post?.user?.firstName} {post?.user?.lastName}
                              </Link>
                            </p>
                            :
                             <p className="text-sm font-medium text-gray-900">
                              <Link
                                to={`/profile/${post?.user?._id}`}
                                className="text-yellow-400 hover:underline"
                              >
                                {post?.user?.firstName} {post?.user?.lastName}
                              </Link>
                            </p>
                            }
                            <div className="flex space-x-1 text-sm text-gray-500">
                              <time>
                                <DateFormatter date={post?.createdAt} />
                              </time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-900">
          <div class="skew bg-yellow-500 skew-bottom mr-for-radius">
            <svg
              class="h-8 md:h-12 lg:h-10 w-full text-gray-900"
              viewBox="0 0 10 10"
              preserveAspectRatio="none"
            >
              <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
            </svg>
          </div>
          <div class="skew bg-gray-500  skew-bottom ml-for-radius">
            <svg
              class="h-8 bg-gray-500 md:h-12 lg:h-20 w-full text-gray-900"
              viewBox="0 0 10 10"
              preserveAspectRatio="none"
            >
              <polygon fill="currentColor" points="0 0 10 0 10 10"></polygon>
            </svg>
          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
}
