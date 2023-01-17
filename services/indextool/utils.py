import logging
import os
from apscheduler.schedulers.blocking import BlockingScheduler
from apscheduler.events import EVENT_JOB_EXECUTED, EVENT_JOB_ERROR

# configure logging
logging.basicConfig(level=logging.INFO,
                    format='%(asctime)s %(name)-12s %(levelname)-8s %(message)s',
                    datefmt='%m-%d %H:%M')


def create_schedule(func: callable) -> BlockingScheduler:
    """ Helper function to set up the schedule for the index tool. """
    interval = int(os.environ.get('INDEX_INTERVAL')) if os.environ.get('INDEX_INTERVAL') else 2
    period = str(os.environ.get('INDEX_PERIOD')) if os.environ.get('INDEX_PERIOD') else "minutes"
    
    # create logger for the function
    logger = logging.getLogger(__name__)
    
    schedule = BlockingScheduler()
    schedule.add_listener(logging_listener, EVENT_JOB_EXECUTED | EVENT_JOB_ERROR)
    
    match period:
        case "weeks":
            schedule.add_job(func, 'interval', weeks=interval)
        case "days":
            schedule.add_job(func, 'interval', days=interval)
        case "hours":
            schedule.add_job(func, 'interval', hours=interval)
        case "minutes":
            schedule.add_job(func, 'interval', minutes=interval)
        case _:
            logger.error(f"Invalid period {period} provided. Scheduling with default period 'minutes'")
            schedule.add_job(func, 'interval', minutes=interval)
    
    return schedule


def generate_db_uri() -> str:
    """
    Helper function to generate the mongodb connection string
    It either returns a connection string with authentication or without, depending on the environment.
    """
    host: str = os.environ.get('MONGODB_HOST') or 'localhost'
    port: int = int(os.environ.get('MONGODB_PORT')) if os.environ.get('MONGODB_PORT') else 27017
    user: str = os.environ.get('MONGODB_USER') or ''
    password: str = os.environ.get('MONGODB_PASS') or ''
    
    if user != '' and password != '':
        return f"mongodb://{user}:{password}@{host}:{port}/"
    else:
        return f"mongodb://{host}:{port}/"


def logging_listener(event):
    if event.exception:
        logging.error(f"Job {event.job_id} threw an exception: {event.exception}")
    else:
        logging.info(f"Job {event.job_id} executed successfully")
