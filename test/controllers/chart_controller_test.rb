require 'test_helper'

class ChartControllerTest < ActionController::TestCase
  test "should get chart_index" do
    get :chart_index
    assert_response :success
  end

  test "should get export_chart" do
    get :export_chart
    assert_response :success
  end

end
