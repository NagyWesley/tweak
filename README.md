# Back-end challenge

# Images upload API

Create an API to enable system users to securely upload images provided that they are authenticated.

## Requirements (ordered by priority)

-   The API must be written using Nodejs.
-   Use serverless framework
-   The API must be deployable to AWS Lambda (you can either use a free aws account or use the serverless-offline library).
-   The images must be stored into AWS S3 (you can either create a free aws account or use localstack).
-   Think about security while developing you APIs (it's impossible to have a system 100% secure).
-   Create a GitHub repository with your project.
-   Documentation
-   Unit or Integration Tests
-   Extract image metadata (EXIF, IPTC) using image magick (https://imagemagick.org/script/identify.php).
-   Store the extracted metadata as a JSON file in the same S3 location the image was saved.
-   Expose a User API to Register and Login system users.
-   Use of public layers (where necessary)

> Estimated time - No more than 6 hours. The requirements are ordered by priority, if a part is going to take you too long to complete move onto the next one.
