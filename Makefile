APP=otthonzona
ENVIRONMENT=stg
GCP_PROJECT_ID=otthonzona-415409

# GCloud-specifikus célok
gcloud-docker-init:
	gcloud auth configure-docker

gcloud-docker-build:
	docker build -t gcr.io/$(GCP_PROJECT_ID)/$(APP):$(ENVIRONMENT) .

gcloud-docker-push:
	docker push gcr.io/$(GCP_PROJECT_ID)/$(APP):$(ENVIRONMENT)

gcloud-run-deploy:
	gcloud compute instances create-with-container  $(APP)-$(ENVIRONMENT) \
    --container-image=gcr.io/$(GCP_PROJECT_ID)/$(APP):$(ENVIRONMENT) \
    --container-arg="--job_id=1" \
    --image-family=cos-stable \
    --image-project=cos-cloud \
    --machine-type=f1-micro \
    --zone=us-east1-c \
    --project=$(GCP_PROJECT_ID)
