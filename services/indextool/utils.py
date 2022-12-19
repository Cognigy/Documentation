import os
from apscheduler.schedulers.blocking import BlockingScheduler


def create_schedule(func: callable) -> BlockingScheduler:
    """ Helper function to set up the schedule for the index tool. """
    interval = int(os.environ.get('INDEX_INTERVAL')) if os.environ.get('INDEX_INTERVAL') else 2
    period = str(os.environ.get('INDEX_PERIOD')) if os.environ.get('INDEX_PERIOD') else "minutes"
    
    schedule = BlockingScheduler()
    
    match period:
        case "weeks":
            schedule.add_job(func, 'interval', weeks=interval)
        case "days":
            schedule.add_job(func, 'interval', days=interval)
        case "hours":
            schedule.add_job(func, 'interval', hours=interval)
        case "minutes":
            schedule.add_job(func, 'interval', minutes=interval)
    
    return schedule


def generate_db_uri() -> str:
    """
    Helper function to generate the mongodb connection string
    It either returns a connection string with authentication or without, depending on the environment.
    """
    host: str = os.environ.get('MONGODB_HOST') if os.environ.get('MONGODB_HOST') else 'localhost'
    port: int = int(os.environ.get('MONGODB_PORT')) if os.environ.get('MONGODB_PORT') else 27017
    user: str = os.environ.get('MONGODB_USER') if os.environ.get('MONGODB_USER') else ''
    password: str = os.environ.get('MONGODB_PASS') if os.environ.get('MONGODB_PASS') else ''
    
    if user != '' and password != '':
        return f"mongodb://{user}:{password}@{host}:{port}/"
    else:
        return f"mongodb://{host}:{port}/"


def create_schedule(func: callable) -> BlockingScheduler:
    """ Helper function to set up the schedule for the index tool. """
    interval = int(os.environ.get('INDEX_INTERVAL')) if os.environ.get('INDEX_INTERVAL') else 2
    period = str(os.environ.get('INDEX_PERIOD')) if os.environ.get('INDEX_PERIOD') else "minutes"
    
    schedule = BlockingScheduler()
    
    match period:
        case "weeks":
            schedule.add_job(func, 'interval', weeks=interval)
        case "days":
            schedule.add_job(func, 'interval', days=interval)
        case "hours":
            schedule.add_job(func, 'interval', hours=interval)
        case "minutes":
            schedule.add_job(func, 'interval', minutes=interval)
    
    return schedule


def generate_db_uri() -> str:
    """
    Helper function to generate the mongodb connection string
    It either returns a connection string with authentication or without, depending on the environment.
    """
    host: str = os.environ.get('MONGODB_HOST') if os.environ.get('MONGODB_HOST') else 'localhost'
    port: int = int(os.environ.get('MONGODB_PORT')) if os.environ.get('MONGODB_PORT') else 27017
    user: str = os.environ.get('MONGODB_USER') if os.environ.get('MONGODB_USER') else ''
    password: str = os.environ.get('MONGODB_PASS') if os.environ.get('MONGODB_PASS') else ''
    
    if user != '' and password != '':
        return f"mongodb://{user}:{password}@{host}:{port}/"
    else:
        return f"mongodb://{host}:{port}/"
