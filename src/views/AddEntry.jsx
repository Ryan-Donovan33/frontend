import React from "react";
import { connect } from "react-redux";
import { Card, FormInput, PrimaryButton, FormSelect, FormSelectOption, SecondaryButton } from "../components/GeneralStyling";
import Navbar from "../components/layout/Navbar";
import TitleBar from "../components/layout/TitleBar";

function AddEntry(props) {
  return (
    <div className="add-entry">
      <Navbar />
      <div className="add-entry-content container">
      <TitleBar {...props} title="Add Entry" />

        <Card>
        <form>
            <FormInput placeholder="Food Name" type="text"/>
            <FormSelect value="" placeholder="Category">
            <FormSelectOption value="" disabled hidden>Category</FormSelectOption>
            </FormSelect>
            <PrimaryButton>Add Entry</PrimaryButton>
            <SecondaryButton>Cancel</SecondaryButton>
        </form>
            
        </Card>
      </div>
    </div>
  );
}

export default connect(state => {
  return {};
})(AddEntry);
