import * as actions from '../index'
import thunk from 'redux-thunk'


describe('actions', () => {
  const subreddit = 'reactjs'
  // Add the mockJSON response
  const mockJSON = {
    data: {
      children: [{ data: { title: "Post 1" } }, { data: { title: "Post 2" } }]
    }
  };

  describe('selectSubreddit', () => {
    it('should create an action with a given subreddit', () => {
      const expectedAction = {
        type: actions.SELECT_SUBREDDIT,
        subreddit
      }
      expect(actions.selectSubreddit(subreddit)).toEqual(expectedAction)
    })
  })

  describe('receivePosts', () => {
    it('should create the expected action', () => {
      const expectedAction = {
        type: actions.RECEIVE_POSTS,
        subreddit,
        posts: actions.transformResponseBody(mockJSON),
      }
      expect(actions.receivePosts(subreddit, mockJSON)).toMatchObject(expectedAction);
    })
  })

})
