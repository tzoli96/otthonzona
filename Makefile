APP=otthonzona
ENVIRONMENT=stg

# GCloud-specifikus célok
gcloud-docker-init:
	gcloud auth configure-docker

gcloud-docker-build:
	docker build -t gcr.io/$(GCP_PROJECT_ID)/$(APP):$(ENVIRONMENT) .

gcloud-docker-push:
	docker push gcr.io/$(GCP_PROJECT_ID)/$(APP):$(ENVIRONMENT)

gcloud-run-deploy:
	gcloud run deploy $(APP)-$(ENVIRONMENT) \
	--region europe-west1 \
	--image gcr.io/$(GCP_PROJECT_ID)/$(APP):$(ENVIRONMENT) \
	--project $(GCP_PROJECT_ID) \
	--max-instances 1 \
	--platform managed \
	--labels enviroment=$(ENVIRONMENT) \
	--allow-unauthenticated

	gcloud compute instances create-with-container $(APP)-$(ENVIRONMENT) \
    --container-image=gcr.io/$(GCP_PROJECT_ID)/$(APP):$(ENVIRONMENT) \
    --image-family=cos-stable \
    --image-project=cos-cloud \
    --machine-type=f1-micro \
    --zone=europe-west1 \
    --project=${APP}
