# Images upload API

Application that uploads images to S3 bucket and extracts data from them.

FUNCTIONS:

1. Upload:
   uploads Images to S3 bucket
   run locally: sls offline
   example: https://aws-url/dev/
   TYPE: POST
   BODY: {
   KEY: 'name',
   VALUE: 'file body',
   contentType: 'image/jpeg'||'image/png'
   }

2)extractor (Not finished): gets invoked after S3 object addition
extracts info and write it to S3

run locally: sls invoke local -f extractData --path event.json
