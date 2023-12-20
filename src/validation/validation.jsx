export const ValidateBlog = (values) => {
  const response = {};

  const REGEX_EMAIL = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@redberry\.ge$/;
  const REGEX_NAME = /^(?:[ა-ჰ]+\s[ა-ჰ]+)+$/;


  if (
    !values?.author ||
    values?.author.trim().length < 4 ||
    !REGEX_NAME.test(values?.author)
  ) {
    response.author = "invalid";
  } else {
    response.author = "valid";
  }

  if (!values?.title || values?.title.length < 2) {
    response.title = "invalid";
  } else {
    response.title = "valid";
  }


  if (!values?.description || values?.description.length < 2) {
    response.description = "invalid";
  } else {
    response.description = "valid";
  }


  if (!REGEX_EMAIL.test(values?.email)) {
    response.email = "invalid";
  } else {
    response.email = "valid";
  }

  if (!values?.publish_date) {
    response.publish_date = "invalid";
  } else {
    response.publish_date = "valid";
  }

   if (!values?.image) {
     response.image = "invalid";
   } else {
     response.image = "valid";
   }

  console.log(response);

  return response;
};
