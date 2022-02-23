import React from "react";

const PersonalDetails = () => {
  return (
    <form method="post" name="enq">
      <div class="row">
        <div class="form-group col-md-6">
          <label>
            First Name <span class="required">*</span>
          </label>
          <input required="" class="form-control" name="fname" type="text" />
        </div>
        <div class="form-group col-md-6">
          <label>
            Last Name <span class="required">*</span>
          </label>
          <input required="" class="form-control" name="lname" />
        </div>
        <div class="form-group col-md-12">
          <label>
            Email Address <span class="required">*</span>
          </label>
          <input required="" class="form-control" name="email" type="email" />
        </div>
        <div class="form-group col-md-12">
          <label>
            Phone Number <span class="required">*</span>
          </label>
          <input required="" class="form-control" name="phone" type="number" />
        </div>
        <div class="form-group col-md-12">
          <label>
            Address Line1 <span class="required">*</span>
          </label>
          <input required="" class="form-control" name="address1" type="text" />
        </div>
        <div class="form-group col-md-12">
          <label>
            Address Line2<span class="required">*</span>
          </label>
          <input required="" class="form-control" name="address2" type="text" />
        </div>
        <div class="form-group col-md-12">
          <label>
            Landmark <span class="required">*</span>
          </label>
          <input required="" class="form-control" name="landmark" type="text" />
        </div>
        <div class="form-group col-md-12">
          <label>
            State <span class="required">*</span>
          </label>
          <input required="" class="form-control" name="state" type="text" />
        </div>
        <div class="col-md-12">
          <button
            type="submit"
            class="btn btn-fill-out submit font-weight-bold"
            name="submit"
            value="Submit"
          >
            Save Change
          </button>
        </div>
      </div>
    </form>
  );
};

export default PersonalDetails;
