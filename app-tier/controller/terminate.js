const AWS = require("aws-sdk");
var metadata = require("node-ec2-metadata");
// Configure AWS
AWS.config.update({
  region: "us-east-1",
  accessKeyId: "*********************",
  secretAccessKey: "+************************",
});

const EC2 = new AWS.EC2();

metadata
  .getMetadataForInstance("instance-id")
  .then(function (instanceId) {
    console.log("Instance ID: " + instanceId);
    const params = {
      InstanceIds: [instanceId],
    };

    EC2.terminateInstances(params, function (err, data) {
    });
  })
  .fail(function (error) {
    console.log("Error: " + error);
  });
