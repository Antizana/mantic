a) cd <workspace path>/lambda-api/survey-downloader
b) npm run zip
aws --profile=xxxx s3 cp <workspace path>/lambda-api/survey-downloader/passive-measurement-survey-downloader.zip s3://lambda-zips

aws lambda update-function-code --profile=xxxxxxx --region us-east-1 --function-name arn:aws:lambda:us-east-1:xxxxxxx:function:passive-measurement-survey-downloader --s3-bucket lambda-zips --s3-key passive-measurement-survey-downloader.zip –publish

aws lambda update-alias --profile=xxxxxx --region us-east-1 --function-name passive-measurement-survey-downloader --description "prd" --function-version "latest version number" --name PRD
