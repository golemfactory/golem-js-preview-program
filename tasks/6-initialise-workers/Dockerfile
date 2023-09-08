FROM python

WORKDIR /golem/work
VOLUME /golem/input

COPY Dockerfile /golem/info/image-info
COPY similarities.py /golem/work/similarities.py
COPY requirements.txt /golem/work/requirements.txt

RUN pip install -r requirements.txt
