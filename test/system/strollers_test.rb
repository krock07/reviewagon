require "application_system_test_case"

class StrollersTest < ApplicationSystemTestCase
  setup do
    @stroller = strollers(:one)
  end

  test "visiting the index" do
    visit strollers_url
    assert_selector "h1", text: "Strollers"
  end

  test "creating a Stroller" do
    visit strollers_url
    click_on "New Stroller"

    fill_in "Image url", with: @stroller.image_url
    fill_in "Name", with: @stroller.name
    fill_in "Slug", with: @stroller.slug
    click_on "Create Stroller"

    assert_text "Stroller was successfully created"
    click_on "Back"
  end

  test "updating a Stroller" do
    visit strollers_url
    click_on "Edit", match: :first

    fill_in "Image url", with: @stroller.image_url
    fill_in "Name", with: @stroller.name
    fill_in "Slug", with: @stroller.slug
    click_on "Update Stroller"

    assert_text "Stroller was successfully updated"
    click_on "Back"
  end

  test "destroying a Stroller" do
    visit strollers_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Stroller was successfully destroyed"
  end
end
