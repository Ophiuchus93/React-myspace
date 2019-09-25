require 'test_helper'

class Api::FriendsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_friends_index_url
    assert_response :success
  end

  test "should get show" do
    get api_friends_show_url
    assert_response :success
  end

end
